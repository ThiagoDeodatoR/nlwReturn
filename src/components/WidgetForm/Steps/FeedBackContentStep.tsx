import { ArrowLeft } from "phosphor-react";
import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentStepProps {
    feedBackType: FeedBackType;
    onFeedBackRestartRequest: () => void;
}

export function FeedBackContentStep({ feedBackType, onFeedBackRestartRequest }: FeedBackContentStepProps) {
    
    const feedBackTypeInfo = feedBackTypes[feedBackType];
    
    return (
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute"
                    onClick={onFeedBackRestartRequest}
                >
                    <ArrowLeft weight="bold" className=" w-4 h-4 "/>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                     <img src={feedBackTypeInfo.image.src} alt={feedBackTypeInfo.image.alt} className=" w-6 h-6 " />
                     
                     { feedBackTypeInfo.title } 
                </span>

                <CloseButton />
            </header>

            <form action="" className="my-4 w-full">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Nos informe o que está acontecendo"     
                />

                <footer className="flex gap=2 mt-2">
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}