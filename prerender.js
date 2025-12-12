const fs = require('fs')
const path = require('path')
const { fileURLToPath } = require('url')

const root = process.cwd()

const toAbsolute = (p) => path.resolve(root, p)

const manifest = require('./dist/static/ssr-manifest.json')
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = require('./dist/server/entry-server.js')

const routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map(file => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'home' ? '/' : `/${name}`
})

// Add manual routes if mapping is off
const routes = ['/', '/kanzlei', '/leistungen']

    ; (async () => {
        // pre-render each route...
        for (const url of routes) {
            const appHtml = render(url)

            const html = template.replace(`<!--app-html-->`, appHtml)

            const filePath = `dist/static${url === '/' ? '/index.html' : url + '/index.html'}`

            // Create directory if it doesn't exist
            const dir = path.dirname(filePath)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }

            fs.writeFileSync(toAbsolute(filePath), html)
            console.log('pre-rendered:', filePath)
        }
    })()
