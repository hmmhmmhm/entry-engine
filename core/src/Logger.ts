import * as FolderLogger from "folder-logger"

// 로그파일을 저장할 폴더 경로를 지정합니다.
const path = `${__dirname}/../logs/`

// 로거 인스턴스를 초기화합니다.
const logger = new FolderLogger(path)

export default logger
