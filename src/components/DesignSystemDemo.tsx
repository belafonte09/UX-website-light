import React from 'react';

const DesignSystemDemo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="mb-4">Design System Demo</h1>
        <p className="text-muted-foreground">
          Showcasing the Jost typography, Sora headings, and Riso color palette
        </p>
      </div>

      {/* Typography Showcase */}
      <section className="space-y-6">
        <h2 className="border-b pb-2">Typography Scale</h2>

        <div className="space-y-4">
          <div>
            <h1 className="font-sora">Project Titles - Sora Bold 48px/32px</h1>
            <p className="text-small text-muted-foreground">Font size: 3rem/2rem (48px/32px), Weight: 700 (Bold), Line height: 1.1, Font: Sora</p>
          </div>

          <div>
            <h1>Heading 1 - Jost Bold 40px</h1>
            <p className="text-small text-muted-foreground">Font size: 2.5rem (40px), Weight: 700 (Bold), Line height: 1.1</p>
          </div>

          <div>
            <h2>Heading 2 - Jost Extrabold 20px</h2>
            <p className="text-small text-muted-foreground">Font size: 1.25rem (20px), Weight: 800 (Extrabold), Line height: 1.2</p>
          </div>

          <div>
            <h3>Heading 3 - Jost Extrabold 16px</h3>
            <p className="text-small text-muted-foreground">Font size: 1rem (16px), Weight: 800 (Extrabold), Line height: 1.2</p>
          </div>

          <div>
            <p className="text-card">Card text - Jost Medium 16px</p>
            <p className="text-small text-muted-foreground">Font size: 1rem (16px), Weight: 500 (Medium), Line height: 1.2</p>
          </div>

          <div>
            <p>Body text - Jost Regular 16px with 2% line spacing</p>
            <p className="text-small text-muted-foreground">Font size: 1rem (16px), Weight: 400 (Regular), Line height: 1.02</p>
          </div>

          <div>
            <p className="text-body-bold">Body text bold - Jost Extrabold 16px with 2% line spacing</p>
            <p className="text-small text-muted-foreground">Font size: 1rem (16px), Weight: 800 (Extrabold), Line height: 1.02</p>
          </div>

          <div>
            <p className="text-small">Small text - Jost Regular 14px with 2% line spacing</p>
            <p className="text-small text-muted-foreground">Font size: 0.875rem (14px), Weight: 400 (Regular), Line height: 1.02</p>
          </div>
        </div>
      </section>

      {/* Updated Text Colors */}
      <section className="space-y-6">
        <h2 className="border-b pb-2">Text Colors</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="mb-3">Body Text</h3>
            <p className="text-muted-foreground mb-2">This is muted foreground text - updated to be one shade darker for better readability</p>
            <p className="text-small text-muted-foreground">HSL: 225 12% 28% (was 36%)</p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="mb-3">Regular Text</h3>
            <p className="text-foreground mb-2">This is regular foreground text</p>
            <p className="text-small text-muted-foreground">HSL: 225 15% 18%</p>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="space-y-6">
        <h2 className="border-b pb-2">Riso Color Palette</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-full h-20 bg-riso-black rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Black</p>
            <p className="text-small text-muted-foreground">#13131A</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-white border border-border rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso White</p>
            <p className="text-small text-muted-foreground">#F5F0F0</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-background rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Background</p>
            <p className="text-small text-muted-foreground">#1F1B3F</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-pink rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Pink</p>
            <p className="text-small text-muted-foreground">#D91A69</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-yellow rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Yellow</p>
            <p className="text-small text-muted-foreground">#F8B82F</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-green rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Green</p>
            <p className="text-small text-muted-foreground">#0EB89B</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-blue rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Blue</p>
            <p className="text-small text-muted-foreground">#2C5FB2</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-fuschia rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Fuschia</p>
            <p className="text-small text-muted-foreground">#B2278E</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-teracotta rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Teracotta</p>
            <p className="text-small text-muted-foreground">#C76935</p>
          </div>

          <div className="text-center">
            <div className="w-full h-20 bg-riso-purple rounded-lg mb-2"></div>
            <p className="text-small font-medium">Riso Purple</p>
            <p className="text-small text-muted-foreground">#995198</p>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <h2 className="border-b pb-2">Usage Examples</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-riso-blue mb-3">Using Riso Colors</h3>
            <p className="mb-4">You can now use Riso colors with Tailwind classes:</p>
            <ul className="space-y-2 text-small">
              <li className="text-riso-pink">• text-riso-pink</li>
              <li className="text-riso-green">• text-riso-green</li>
              <li className="text-riso-blue">• text-riso-blue</li>
              <li>• bg-riso-yellow (background)</li>
              <li>• border-riso-purple (borders)</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-riso-fuschia mb-3">Typography Classes</h3>
            <p className="mb-4">Custom typography utility classes:</p>
            <ul className="space-y-2 text-small">
              <li>• text-small (14px Regular)</li>
              <li>• text-card (16px Medium)</li>
              <li>• text-body-bold (16px Extrabold)</li>
              <li>• font-jost (Jost font family)</li>
              <li>• font-sora (Sora font family - for project titles & secondary headers)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemDemo;