import { HfInference } from "@huggingface/inference";


const hf = new HfInference(process.env.REACT_APP_HF_KEY);

export const inference = async (prompt: string) => {
    console.log("Calling Inference")
    const response = await fetch("https://res.cloudinary.com/sotasamson96/image/upload/v1586053573/Personal%20Website/landing-image_sniipd.jpg");
    const data = await response.blob();
    const metadata = {
      type: 'image/jpeg'
    };
    const file = new File([data], "test.jpg", metadata);
    const genImage = await hf.imageToImage({
      inputs: file,
      parameters: {
        prompt
      },
      model: "timbrooks/instruct-pix2pix"
    });

    console.log({ genImage });

    return genImage;
}