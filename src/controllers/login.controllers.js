
const registerUser = async(req, res) => {
    await res.status(200).json({
        message: "ok"
    })
}

export {registerUser}