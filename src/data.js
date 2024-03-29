export let allComments = [

  {
      id: 1,
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: new Date(2024, 1, 2, 12, 30, 0, 0).getTime(),
      likes: 12,
      user: {
          image: "image-amyrobson.png",
          username: "amyrobson"
      },
      replies: []
  }, 

  {
      id: 2,
      content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: new Date(2024, 1, 25, 12, 30, 0, 0).getTime(),
      likes: 5,
      user: {
        image: "image-maxblagun.png",
        username: "maxblagun"
      },
      replies: [
        {
          id: 3,
          content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: new Date(2024, 2, 6, 12, 30, 0, 0).getTime(),
          likes: 4,
          user: {
            image:  "image-ramsesmiron.png",
            username: "ramsesmiron"
          }, 
          referTo: "maxblagun"
        },
        {
          id: 4,
          content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: new Date(2024, 2, 11, 12, 30, 0, 0).getTime(),
          likes: 2,
          user: {
            image:  "image-juliusomo.png",
            username: "juliusomo"
          }, 
          referTo: "ramsesmiron"
        }
      ]
    }

]