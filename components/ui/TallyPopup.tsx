"use client"

interface TallyPopupProps {
    formId: string
    children: React.ReactNode
    className?: string
}

export default function TallyPopup({
    formId,
    children,
    className = ''
}: TallyPopupProps) {

    const openPopup = () => {
        // @ts-ignore
        if (typeof Tally !== 'undefined') {
            // @ts-ignore
            Tally.openPopup(formId, {
                width: 500,
                overlay: true,
                emoji: {
                    text: '👋',
                    animation: 'wave'
                }
            })
        }
    }

    return (
        <div
            onClick={openPopup}
            className={`cursor-pointer ${className}`}
        >
            {children}
        </div>
    )
}
