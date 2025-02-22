import { ImageContainer } from "@/components/ui/image-container";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          <ImageContainer
            srcSet="https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/a8050419ec654153b44f826a077f3451/a808001176564620544a98d97db5eda16b9ea3b7cfd18f7637eceefeb073d49f?placeholderIfAbsent=true"
            loading="lazy"
            aspectRatio="0.34"
            alt="Design showcase"
            className="max-md:max-w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Index;
