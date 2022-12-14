import osu from 'node-os-utils'

// console.dir(osu, null, 2);
// 네임스페이스를 환경변수에서 가져온다.
const namespace = process.env.NAMESPACE;
console.log(namespace);

const os = osu.os;
const cpu = osu.cpu;
const mem = osu.mem;
const drive = osu.drive;

let info = {};
let os_info = {};
let cpu_info = {};
let mem_info = {};
let drive_info = {};

export const collect = async () => {

        // console.log('------------------------------------------->');
        // console.log('');
        // console.log('-----------[ os 정보 ]--------------------');

        os_info.oos = await os.oos();
        os_info.platform = os.platform();
        os_info.uptime = os.uptime();
        os_info.ip = os.ip();
        os_info.hostname = os.hostname();
        os_info.type = os.type();
        os_info.arch = os.arch();


        // console.log(JSON.stringify(os_info, null, 2));
        // console.log('');
        // console.log('-----------[ cpu 정보 ]--------------------');

        cpu_info.average = cpu.average()
        cpu_info.usage = await cpu.usage()
        cpu_info.free = await cpu.free()
        cpu_info.count = cpu.count()

        // console.log(JSON.stringify(cpu_info, null, 2));
        // console.log('');
        // console.log('-----------[ memory 정보 ]--------------------');

        mem_info.info = await mem.info()
        mem_info.free = await mem.free()
        mem_info.used = await mem.used()
        mem_info.totalMem = mem.totalMem()

        // console.log(JSON.stringify(mem_info, null, 2));
        // console.log('');
        // console.log('-----------[ drive 정보 ]--------------------');

        drive_info.info = await drive.info()
        drive_info.free = await drive.free()
        drive_info.used = await drive.used()

        // console.log(JSON.stringify(drive_info, null, 2));
        // console.log('<-------------------------------------------')

        // info.os = os_info;
        // info.cpu = cpu_info;
        // info.memory = mem_info;
        // info.disk = drive_info;

        // console.log(JSON.stringify(info, null, 2));
        return {
            namespace: namespace,
            os: os_info,
            cpu: cpu_info,
            memory: mem_info,
            disk: drive_info
        }
    }
;
