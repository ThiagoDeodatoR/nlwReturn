import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"

import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedBackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImageUrl,
            alt: "Imagem de um inseto",
        }
    },

    IDEA: {
        title: "Ideia",
        image: {
            src: ideaImageUrl,
            alt: "Imagem de uma lâmpada",
        }
    },

    OTHER: {
        title: "Outro",
        image: {
            src: thoughtImageUrl,
            alt: "Imagem de uma nuvem de pensamento",
        }
    },
};

/* Object.entries(feedBackTypes) => 
    [ 
        [ "BUG", { ... } ], 
        [ "IDEA", { ... } ], 
        [ "OTHER", { ... } ], 
    ] 
*/

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
    const [feedBackSent, setFeedBackSent] = useState(false);

    function handleRestartFeedBack() {
        setFeedBackSent(false);
        setFeedBackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedBackSent ? (
                <FeedBackSuccessStep onFeedBackRestartRequest ={handleRestartFeedBack} />
            ) : (
                <>
                    {!feedBackType ? (
                        <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />  //ENVIA AO COMPONENT FILHO (FeedBackTypeStep) A FUNÇÃO setFeedBackType
                    ) : (
                        <FeedBackContentStep
                            feedBackType={feedBackType}
                            onFeedBackRestartRequest={handleRestartFeedBack}
                            onFeedBackSent={() => setFeedBackSent(true)}
                        />
                    )}
                </>
            )
            }

            <footer className="text-xs text-neutral-400 flex gap-1">
                <p>Feito com ♥ por </p>
                <a className="underline underline-offset-1" href="https://github.com/Zerfilos" target="_blank">Thiago</a>
            </footer>
        </div>
    )
}