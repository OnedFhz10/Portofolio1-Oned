// src/components/Divider.js

const Divider = () => {
  return (
    <div className="relative flex items-center justify-center py-10 bg-gray-900 overflow-hidden">
      
      {/* Garis Horizontal Gradient */}
      <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      {/* Efek Cahaya (Glow) di Tengah */}
      <div className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
      
      {/* Ornamen Kecil (Diamond) di Tengah */}
      <div className="absolute bg-gray-900 p-1 border border-blue-500/30 rounded-full transform rotate-45">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>

    </div>
  );
};

export default Divider;