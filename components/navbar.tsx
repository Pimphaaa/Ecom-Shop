import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
            <div className="container mx-auto flex items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold text-gray-800 hover:text-[#F19ED2] mr-auto">
                    My Ecommerce
                </Link>
                
                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6 text-gray-600 font-medium mx-auto">
                    <Link href="/" className="hover:text-[#F19ED2] transition">Home</Link>
                    <Link href="/products" className="hover:text-[#F19ED2] transition">Products</Link>
                    <Link href="/checkout" className="hover:text-[#F19ED2] transition">Checkout</Link>
                </div>
            </div>
        </nav>
    );
};