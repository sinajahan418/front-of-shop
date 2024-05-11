// const backendDomin = "http://localhost:8080"

const SummaryApi ={
    Proxy: {
        "/api":{
            target: "http://localhost:8080"
        }
    }
}

export default SummaryApi