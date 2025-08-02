const GradientText = ({ text }: { text: string }) => {
    return (
        <h1
            className="text-4xl font-semibold bg-clip-text text-transparent text-left mb-8 w-max"
            style={{
                backgroundImage: 'linear-gradient(90.09deg, #1A323C 0%, #A5F5ED 50%, #A5F5ED 100%)'
            }}
        >
            {text}
        </h1>
    )
}

export default GradientText