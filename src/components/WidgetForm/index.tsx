import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"

import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";

export const feedBackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImageUrl,
            alt: "Imagem de um inseto",
        }
    },

    IDEA: {
        title: "Idea",
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

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">
                    Deixe seu Feedback
                </span>

                <CloseButton />
            </header>

            {!feedBackType ? (
                <FeedBackTypeStep onFeedBackTypeChanged = {setFeedBackType} />  //ENVIA AO COMPONENT FILHO (FeedBackTypeStep) A FUNÇÃO setFeedBackType
            ) : (
                <p>Hello World</p>
            )}

            <footer className="text-xs text-neutral-400 flex gap-1">
                <p>Feito com ♥ por </p>
                <a className="underline underline-offset-2" href="https://github.com/Zerfilos">Thiago</a>
            </footer>
        </div>
    )
}