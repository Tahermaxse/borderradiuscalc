'use client';
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Sun, Moon, Copy, Check } from "lucide-react";
import { useTheme } from "next-themes";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function Home() {
  const [padding, setPadding] = useState(40);
  const [outerRadius, setOuterRadius] = useState(115);
  const [innerRadius, setInnerRadius] = useState(75);
  const [minRadius] = useState(16);
  const [zoom, setZoom] = useState(1);
  const [hasZoomed, setHasZoomed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  // Update outer radius when inner radius or padding changes
  useEffect(() => {
    const calculatedOuterRadius = innerRadius + padding;
    setOuterRadius(calculatedOuterRadius);
  }, [innerRadius, padding]);

  

  const handleInnerRadiusChange = (value: number[]) => {
    const newInnerRadius = Math.min(value[0], 93); 
    setInnerRadius(newInnerRadius);
  };
  
  const handlePaddingChange = (value: number[]) => {
    const newPadding = Math.min(value[0], 41); 
    setPadding(newPadding);
  };

  const handleZoomIn = () => {
    if (!hasZoomed) {
      setZoom(1.5);
      setHasZoomed(true);
    }
  };

  const handleZoomOut = () => {
    if (hasZoomed) {
      setZoom(1);
      setHasZoomed(false);
    }
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(cssCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const cssCode = `
.outer-box {
  border-radius: ${outerRadius}px;
}

.inner-box {
  border-radius: ${innerRadius}px;
}`.trim();

  return (
    <div className={`overflow-hidden min-h-screen p-4 md:p-6 ${theme === 'dark' ? 'bg-[#131313] text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-4 md:gap-6">
        {/* Playground Area */}
        <div className={`relative h-[585px] overflow-hidden backdrop-blur rounded-2xl p-4 md:p-6 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-white/50'}`}>
        <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
          <div className="flex justify-start mb-6  md:mb-8">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white bg-[#343537] px-2 py-1 rounded-md">R1</span>
              <span className="dark:text-white">+</span>
              <span className="text-white bg-[#343537] px-2 py-1 rounded-md">D</span>
              <span className="dark:text-white">=</span>
              <span className="text-white bg-[#343537] px-2 py-1 rounded-md">R2</span>
              <div className="flex gap-2 text-zinc-500 ml-2">
                <span className="text-[#ec4899]">{innerRadius}</span>
                <span>{padding}</span>
                <span className="text-[#6366f1]">{outerRadius}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square max-w-2xl max-h-[450px] mx-auto mt-[5rem]"
               style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
            <div
              className="absolute inset-0 transition-all duration-200"
              style={{ 
                border: theme === 'dark' ? "2px solid rgba(255,255,255,0.1)" : "2px solid rgba(0,0,0,0.1)",
                borderRadius: `${outerRadius}px` 
              }}
            >
              <div 
                className="absolute top-0 left-0 w-[120px] h-[120px]"
                style={{ 
                  borderTop: "4px solid #6366f1",
                  borderLeft: "4px solid #6366f1",
                  borderTopLeftRadius: `${outerRadius}px`,
                  opacity: 0.8
                }} 
              />
            </div>
            <div
              className="absolute transition-all duration-200 "
              style={{
                inset: `${padding}px`,
                border: theme === 'dark' ? "2px solid rgba(255,255,255,0.1)" : "2px solid rgba(0,0,0,0.1)",
                borderRadius: `${innerRadius}px`,
              }}
            >
              <div 
                className="absolute top-0 right-0 w-[120px] h-[120px]"
                style={{ 
                  borderTop: "4px solid #ec4899",
                  borderRight: "4px solid #ec4899",
                  borderTopRightRadius: `${innerRadius}px`,
                  opacity: 0.8
                }} 
              />
            </div>
            {zoom >= 1.5 && (
              <>
                <span className="absolute top-0 left-1/5 text-sm text-[#6366f1]">{outerRadius}px</span>
                <span className="absolute top-[45px] left-1/4 text-sm text-[#ec4899]">{innerRadius}px</span>
                <span className="absolute top-[20px] left-[65px] text-sm text-zinc-400">{padding}px</span>
              </>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 dark:hover:bg-zinc-800"
              onClick={handleZoomIn}
              disabled={hasZoomed}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 dark:hover:bg-zinc-800"
              onClick={handleZoomOut}
              disabled={!hasZoomed}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 dark:hover:bg-zinc-800"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Controls Sidebar */}
        <div className={`backdrop-blur rounded-2xl p-4 md:p-6 space-y-6 md:space-y-8 ${theme === 'dark' ? 'bg-[#1f1f21]' : 'bg-white/50'}`}>
          <h2 className="text-lg md:text-xl font-semibold mb-6">Configure</h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Padding</label>
                <span className="text-sm text-zinc-400">{padding}px</span>
              </div>
              <Slider
                value={[padding]}
                onValueChange={handlePaddingChange}
                min={0}
                max={200}
                step={1}
                className=" [&>:last-child>span]:h-6 [&>:last-child>span]:w-2.5 [&>:last-child>span]:border-[3px] [&>:last-child>span]:border-background  [&>:last-child>span]:bg-primary [&>:last-child>span]:ring-offset-0"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Inner radius</label>
                <span className="text-sm text-zinc-400">{innerRadius}px</span>
              </div>
              <Slider
                value={[innerRadius]}
                onValueChange={handleInnerRadiusChange}
                min={minRadius}
                max={200}
                step={1}
                className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-2.5 [&>:last-child>span]:border-[3px] [&>:last-child>span]:border-background [&>:last-child>span]:bg-primary [&>:last-child>span]:ring-offset-0"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Outer radius</label>
                <span className="text-sm text-zinc-400">{outerRadius}px</span>
              </div>
              <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-200"
                  style={{ width: `${(outerRadius / 200) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">min-radius</label>
                <span className="text-sm text-zinc-400">{minRadius}px</span>
              </div>
              <p className="text-xs text-zinc-500">Prevents radius from going below</p>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex justify-between items-center mb-2 dark:bg-[#292a2c] bg-gray-100 rounded-tl-lg rounded-tr-lg p-1 px-2 ">
              <span className="text-sm font-medium">CSS</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-zinc-800"
                onClick={handleCopyClick}
              >
                {isCopied ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
            <pre className={`p-4 rounded-bl-lg rounded-br-lg text-xs ${theme === 'dark' ? 'bg-[#292a2c]' : 'bg-gray-100'}`}>
              <code className="text-[#6366f1]">.outer-box</code> {"{"}
              <br />
              <code className="text-zinc-400 pl-4">border-radius: {outerRadius}px;</code>
              <br />
              {"}"}
              <br />
              <br />
              <code className="text-[#ec4899]">.inner-box</code> {"{"}
              <br />
              <code className="text-zinc-400 pl-4">border-radius: {innerRadius}px;</code>
              <br />
              {"}"}
            </pre>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer/>
      </div>
    </div>
  );
}