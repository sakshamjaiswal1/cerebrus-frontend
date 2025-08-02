const GradientTextSmall = ({ text }: { text: string }) => {
    return (
        <span
            className="bg-clip-text text-transparent font-medium"
            style={{
                backgroundImage: 'linear-gradient(90.09deg, #AA7AED 0%, #A5F5ED 50%, #A5F5ED 100%)'
            }}
        >
            {text}
        </span>
    )
}

export default GradientTextSmall