const os = require('os')

// const user = os.userInfo()

// console.log(user)

const customInfo = {
    name : os.type() ,
    release : os.release() ,
    totMem : os.totalmem() ,
    freeMem : os.freemem() ,
}

console.log(customInfo);