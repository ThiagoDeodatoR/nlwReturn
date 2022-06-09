import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    screenShot: string | null;
    onScreenShotTaken: (screenShot: string | null) => void;
}

export function ScreenShotButton({ screenShot , onScreenShotTaken } : ScreenShotButtonProps) {
    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

    async function handleScreenShot() {
        setIsTakingScreenShot(true);

        const canvas = await html2canvas(document.querySelector('html')!); //TIRA O PRINT DA TELA ("!" É PARA FORÇAR POIS SEMPRE EXISTIRÁ A TAG HTML)
        const base64image = canvas.toDataURL('image/png'); //CONVERTE PARA UMA IMAGEM PNG NO FORMATO BASE 64 

        onScreenShotTaken(base64image); //ENVIANDO SCREENSHOT PARA COMPONENT PAI
        setIsTakingScreenShot(false);
    }

    if (screenShot) {
        return (
            <button
                type="button"
                onClick={ () => onScreenShotTaken(null) }
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenShot})`,
                    backgroundPosition: 'right bottom', // POR NÃO CONTER NADA NA PAGINA É PRECISO POSICIONAR O PREVIEW DA IMAGEM PARA O CANTO
                    backgroundSize: 110,                // INFERIOR DIREITO DA TELA
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
    
    return (
        <button
            type="button"
            onClick={handleScreenShot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-brand-500"
        >
            {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
    )
}