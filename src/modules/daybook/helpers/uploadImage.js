import axios from "axios"

const uploadImage = async file => {
  if (!file) return

  try {
    const formData = new FormData()
    formData.append("upload_preset", "vue_course")
    formData.append("file", file)
    const url = `https://api.cloudinary.com/v1_1/valerianomacuri/image/upload`
    const { data } = await axios.post(url, formData)
    console.log({ data })
    return data.secure_url
  } catch (e) {
    console.error(e)
  }
}

export default uploadImage
