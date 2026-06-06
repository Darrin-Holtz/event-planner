import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h3 className="font-bold">
              Ministry Events
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Event Management for Churches and ministries
            </p>
          </div>
          <div className="flex gap-6">
            <Link className="hover:text-gray-400" href="/events">Events</Link>
            <Link className="hover:text-gray-400" href="/about">About</Link>
            <Link className="hover:text-gray-400" href="/login">Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}