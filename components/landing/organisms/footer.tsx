export const Footer = () => {
    return (
        <footer className="py-10 text-center text-xl bg-secondary/20 rounded-tl-full rounded-tr-full text-base-content/80 font-semibold">
            © {new Date().getFullYear()} Productivity App
        </footer>
    );
};