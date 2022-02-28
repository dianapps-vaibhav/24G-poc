module.exports = {
    apps: [{
        name: '24G-poc',
        script: 'build/server.js',
        instances : "max",
        exec_mode : "cluster",
        error_file : __dirname + "/logs/pm2/err.log",
        out_file : __dirname +"/logs/pm2/out.log"
    }],
}