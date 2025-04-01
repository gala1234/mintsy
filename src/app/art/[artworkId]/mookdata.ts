
// This would be replaced with a real data fetching function
export async function getArtwork(id: string) {
    // Mock data for demonstration
    const mockArtwork = {
      id: "123456",
      title: "Dreamy Mountain Landscape",
      prompt:
        "A serene mountain landscape with a misty lake at dawn, painted in watercolor style",
      imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
      author: "ArtLover123",
      family: "Landscapes",
      likes: 42,
      createdAt: "2023-09-15",
      isPublic: true,
    };
  
    // In a real app, you would fetch from an API
    // If not found, return null
    if (id !== mockArtwork.id) {
      return null;
    }
    return mockArtwork;
  }
  