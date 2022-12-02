import {saveMatric} from './db/index.js'
import {collect} from './collect.js'

// 테이블을 생성하고,
// 생성된 테이블의 JSONB 컬럼에 데이터를 인서트

// 반복적으로 처리될 수 있도록 처리(1분 간격)
// const timeout = 60000;
const timeout = 10000;

try {
    setTimeout(async function run() {

        // 매트릭 정보 수집
        const matric = await collect();
        console.log(matric);

        // 매트릭 정보 저장
        await saveMatric(matric);

        setTimeout(run, timeout);
    }, timeout);

} catch (err) {
    console.log(err);
}




