/**
 * @description
 * 프로그램 초기화 시작과정
 */
import "source-map-support/register"
import Logger from "./Logger"
Logger.debug(`🌳  Entry Engine BackEnd 서버 프로그램이 실행 되었습니다.`)
Logger.debug(`🌳  Version: BackEnd-1.0.0-Entry-Plug`)
Logger.debug(`🚧  Ctrl+C 를 입력해서 프로그램을 종료할 수 있습니다.`)

/**
 * @description
 * 내장형 데이터베이스 초기화
 */
import Database from "./Database"
if (typeof Database !== "object")
    throw new Error("Database 접근에 실패했습니다. 파일권한 부족 또는 손상")

/**
 * @description
 * 서버 옵션 묶음
 */
const port: number = Number(process.env.PORT) || 3000

/**
 * @description
 * Express 인스턴스 생성
 */
import * as express from "express"
import Express from "./Express"
const app: express.Application = Express.getInstance().express

/**
 * @description
 * Express 인스턴스 서버 포트개방
 */
app.listen(port, () => {
    Logger.debug(`🚧  서버 인스턴스가 ${port} 포트로 웹앱 송수신을 시작했습니다.`)
    Logger.debug(`🚧  웹앱 내부 접근 경로 http://127.0.0.1:${port}`)
}).on("error", (err) => Logger.error(`🔥  ${String(err)}`))
