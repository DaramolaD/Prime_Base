const prod_loan_base_url = "https://okigwecreations.online/api/";

export const request = async ( method, headers = [], body = {}) => {
    let res
    let data
    
    switch (method) {
        case 'POST':
            try {
                res = await fetch(prod_loan_base_url, { headers, method, body,  })
                if (res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            } catch (error) {
                console.log(error.message);
            }
            return res
        default:
            return
    }
}
