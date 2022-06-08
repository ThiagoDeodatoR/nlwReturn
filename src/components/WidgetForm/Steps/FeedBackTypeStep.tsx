import { FeedBackType, feedBackTypes } from "..";

interface FeedBackTypeStepProps {
    onFeedBackTypeChanged: (type: FeedBackType) => void; //DECLARANDO QUE ESSE COMPONENT ESTÁ RECEBENDO UMA INFORMAÇÃO DO TIPO FeeBacktype
}

export function FeedBackTypeStep({ onFeedBackTypeChanged } : FeedBackTypeStepProps) {
    return (
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedBackTypes).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        type="button"
                        onClick={() => onFeedBackTypeChanged(key as FeedBackType)} //RETORNA AO COMPONENT PAI SE ACONTECER ALGUMA MUDANÇA
                    >
                        <img src={value.image.src} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                );
            })}
        </div>
    )
}