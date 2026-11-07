interface EnvironmentVariables {
    NEXT_PUBLIC_API_BASE_URL: string,
}

declare namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
}