import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedBackContentStepProps {
    feedBackType: FeedBackType;
    onFeedBackRestartRequest: () => void;
    onFeedBackSent: () => void;
}

export function FeedBackContentStep({ 
        feedBackType, 
        onFeedBackRestartRequest,
        onFeedBackSent, 
    }: FeedBackContentStepProps) {
    
    const feedBackTypeInfo = feedBackTypes[feedBackType];

    const [screenShot, setScreenShot] = useState<string | null>(null);
    const [feedBackComment, setFeedBackComment] = useState('');
    
    function handleFeedbackSubmit(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenShot,
            feedBackComment,
        });

        onFeedBackSent();
    }

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

            <form onSubmit={handleFeedbackSubmit} className="my-4 w-full">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Nos informe o que está acontecendo"  
                    onChange={event => setFeedBackComment(event.target.value)}  
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenShotButton 
                        screenShot={screenShot}
                        onScreenShotTaken={setScreenShot}
                    />
                    
                    <button
                        type="submit"
                        disabled={feedBackComment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-brand-300 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:hover:ring-0 disabled:hover:ring-offset-0 disabled:hover:ring-offset-transparent disabled:hover:ring-transparent" 
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}