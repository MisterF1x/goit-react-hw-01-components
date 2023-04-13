import { IconSize } from "constant";
import { BsFiletypeDocx, BsFileEarmarkPdf, BsFiletypeMp3, BsFiletypePsd } from "react-icons/bs";

export const statsIcon = (label) => {
    switch (label) {
        case ".docx":
            return <BsFiletypeDocx size={IconSize.md}/>
        case ".pdf":
            return <BsFileEarmarkPdf size={IconSize.md}/>
        case ".mp3":
            return <BsFiletypeMp3 size={IconSize.md}/>
        case ".psd":
            return <BsFiletypePsd size={IconSize.md}/>
        default:
            throw new Error(`Unknown label ${label}`);
    }
}
export const getRandomHexColor = () => {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
  return color;
}