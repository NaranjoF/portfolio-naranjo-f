export default function Footer() {
  return (
    <footer className="border-t border-gray-12 py-2 mx-20">
      <div className="text-[#666666] font-light text-xs md:text-sm flex justify-center items-center">
        <p>@{new Date().getFullYear()} NaranjoF All rights reserved.</p>
      </div>
    </footer>
  );
}
