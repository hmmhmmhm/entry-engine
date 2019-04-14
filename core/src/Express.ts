import * as express from "express"
import * as nestedStatic from "nested-static"
import GraphQL from "./GraphQL"
import Logger from "./Logger"

class Express {

    public static getInstance(): Express {
        return new Express()
    }
    public express: express.Application

    constructor() {
        this.express = express()

        /**
         * @description
         * Express 로 웹링크로 GraphQL 경로를 생성합니다.
         */
        GraphQL.applyMiddleware({
            path: "/graphql", /* GraphQL 웹경로 */
            app: this.express
        })

        /**
         * @description
         * 여기에서 기본 Express 요소를 초기화합니다.
         */
        nestedStatic(`${__dirname}/../static`, (folders)=>{
            Logger.debug(`🚧  서버 인스턴스에서 사용할 웹주소 경로 생성을 시작합니다.`)
            for(let {staticPath, subPath} of folders)
                this.express.use(subPath, express.static(staticPath))
        })
    }
}

export default Express
