const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-20 lg:py-24 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper