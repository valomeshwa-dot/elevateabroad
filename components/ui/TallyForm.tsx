"use client"

import { useEffect } from 'react'

interface TallyFormProps {
    formId: string
    className?: string
}

export default function TallyForm({
    formId,
    className = ''
}: TallyFormProps) {

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://tally.so/widgets/embed.js"]'
        )

        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://tally.so/widgets/embed.js'
            script.async = true
            script.onload = () => {
                // @ts-ignore
                if (typeof Tally !== 'undefined') {
                    // @ts-ignore
                    Tally.loadEmbeds()
                }
            }
            document.head.appendChild(script)
        } else {
            // @ts-ignore
            if (typeof Tally !== 'undefined') {
                // @ts-ignore
                Tally.loadEmbeds()
            }
        }
    }, [formId])

    return (
        <div className={`w-full ${className}`}>
            <iframe
                data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                loading="lazy"
                width="100%"
                height="400"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="ElevateAbroad Form"
                className="w-full"
                style={{ minHeight: '400px' }}
            />
        </div>
    )
}
