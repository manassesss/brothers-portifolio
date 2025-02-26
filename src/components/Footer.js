export default function Footer() {
    return (
      <footer className="bg-[#1E1E1E] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Linha divisória */}
          <div className="font-[Montserrat] text-center text-sm">
            © {new Date().getFullYear()} Miquéias Santos. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    );
  }