export default function Footer() {
return (
        <footer className="border-t border-gray-100">
            <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-500">© {new Date().getFullYear()} AeroBottle</div>
                <div className="text-sm">Made by <a className="underline" href="https://www.instagram.com/cchxngx_c/">Chang</a></div>
            </div>
        </footer>
    );
}