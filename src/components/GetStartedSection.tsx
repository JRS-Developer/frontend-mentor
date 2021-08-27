import Button from "./Button"

const GetStartedSection = () => {
    return (
        <section className="bg-primary-alt mt-24 h-56 flex flex-col items-center justify-center gap-4 bg-boost-mobile md:bg-boost-desktop bg-no-repeat">
            <h3 className="font-bold text-white text-2xl md:text-4xl">
                Boost your links today
            </h3>
            <Button>
                Get Started
            </Button>
        </section>
    )
}

export default GetStartedSection
