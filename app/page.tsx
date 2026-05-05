'use client';

export default function Home() {
  const handleClassifiedClick = () => {
    alert("Humesha pareshan karungi, hehe.");
  };

  return (
    <html className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Daily Chaos - Birthday Edition</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:ital@0;1&display=swap');

          body {
            font-family: 'Lora', 'Times New Roman', serif;
            background-color: #f4ede4;
            color: #2c2c2c;
            line-height: 1.8;
            background-image: 
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px);
            animation: fadeIn 0.8s ease-in;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .newspaper-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f9f6f2;
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
          }

          /* HEADER */
          .newspaper-header {
            border-bottom: 3px solid #2c2c2c;
            padding-bottom: 20px;
            margin-bottom: 20px;
            text-align: center;
            border-top: 2px solid #2c2c2c;
            padding-top: 20px;
          }

          .masthead {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 900;
            letter-spacing: 2px;
            margin-bottom: 5px;
            text-transform: uppercase;
          }

          .subtitle {
            font-size: 14px;
            letter-spacing: 1px;
            margin-bottom: 10px;
            font-style: italic;
          }

          .dateline {
            font-size: 12px;
            letter-spacing: 0.5px;
            border-top: 1px solid #2c2c2c;
            border-bottom: 1px solid #2c2c2c;
            padding: 8px 0;
            text-transform: uppercase;
          }

          /* MAIN HEADLINE */
          .main-headline {
            font-family: 'Playfair Display', serif;
            font-size: 52px;
            font-weight: 900;
            text-align: center;
            margin: 30px 0 10px 0;
            line-height: 1.2;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .subheadline {
            text-align: center;
            font-size: 18px;
            font-style: italic;
            margin-bottom: 30px;
            color: #555;
          }

          /* CONTENT LAYOUT */
          .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 220px;
            gap: 20px;
            margin-bottom: 30px;
          }

          .article {
            padding-right: 15px;
            border-right: 1px solid #d0c0b0;
          }

          .article:last-child {
            border-right: none;
          }

          .article-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .article-text {
            text-align: justify;
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          /* DROP CAP */
          .drop-cap {
            float: left;
            font-family: 'Playfair Display', serif;
            font-size: 52px;
            font-weight: 700;
            line-height: 40px;
            margin-right: 5px;
            margin-top: 2px;
            color: #2c2c2c;
          }

          /* SIDEBAR */
          .sidebar {
            border: 2px solid #2c2c2c;
            padding: 15px;
            height: fit-content;
          }

          .sidebar-title {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            border-bottom: 1px solid #2c2c2c;
            padding-bottom: 10px;
            margin-bottom: 10px;
            text-transform: uppercase;
          }

          .stat {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            padding: 8px 0;
            border-bottom: 1px dashed #d0c0b0;
          }

          .stat:last-child {
            border-bottom: none;
          }

          /* IMAGE SECTION */
          .image-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 30px 0;
            grid-column: 1 / -1;
          }

          .news-image {
            border: 3px solid #2c2c2c;
            background-color: #ddd;
            aspect-ratio: 4/3;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-style: italic;
            font-size: 13px;
            filter: grayscale(1) contrast(1.1);
          }

          .image-caption {
            font-size: 12px;
            font-style: italic;
            text-align: center;
            margin-top: 8px;
            color: #555;
          }

          /* TICKER */
          .ticker {
            background-color: #2c2c2c;
            color: #f4ede4;
            padding: 10px 15px;
            font-size: 12px;
            text-align: center;
            margin: 30px 0;
            border-top: 2px solid #2c2c2c;
            border-bottom: 2px solid #2c2c2c;
            letter-spacing: 1px;
          }

          /* EDITORIAL */
          .editorial {
            background-color: #f0e6d8;
            border: 2px solid #2c2c2c;
            padding: 25px;
            margin-top: 30px;
          }

          .editorial-title {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .editorial-text {
            text-align: justify;
            font-size: 16px;
            line-height: 1.8;
            color: #333;
          }

          /* BUTTON */
          .classified-btn {
            display: block;
            margin: 30px auto;
            padding: 12px 30px;
            background-color: #2c2c2c;
            color: #f4ede4;
            border: 2px solid #2c2c2c;
            font-family: 'Lora', serif;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .classified-btn:hover {
            background-color: #f4ede4;
            color: #2c2c2c;
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .content-wrapper {
              grid-template-columns: 1fr;
            }

            .article {
              border-right: none;
              border-bottom: 1px solid #d0c0b0;
              padding-right: 0;
              padding-bottom: 15px;
            }

            .sidebar {
              grid-column: 1;
            }

            .main-headline {
              font-size: 36px;
            }

            .masthead {
              font-size: 32px;
            }

            .image-section {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="newspaper-container">
          {/* HEADER */}
          <div className="newspaper-header">
            <div className="masthead">The Daily Chaos</div>
            <div className="subtitle">Established: The Day Aditya Became a Problem</div>
            <div className="dateline">May 6, 2026 | Special Birthday Edition</div>
          </div>

          {/* MAIN HEADLINE */}
          <div className="main-headline">Aditya Turns 22: Nation in Shock</div>
          <div className="subheadline">Experts confirm maturity still missing despite age increase</div>

          {/* ARTICLES AND SIDEBAR */}
          <div className="content-wrapper">
            {/* LEFT COLUMN */}
            <article className="article">
              <h2 className="article-title">Local Authorities Concerned</h2>
              <p className="article-text">
                <span className="drop-cap">D</span>
                espite turning 22, Aditya continues to exhibit chaotic behavior at alarming rates. Officials report increased incidents of questionable decision-making, spontaneous adventures, and an uncanny ability to turn ordinary situations into comedic disasters. Authorities have advised friends to remain vigilant and maintain a safe distance during periods of heightened unpredictability. When asked for comment, local experts simply shook their heads in resignation.
              </p>
              <p className="article-text">
                The Department of General Chaos has issued an official statement: "We tried. We really tried." Sources suggest this pattern will likely continue indefinitely.
              </p>
            </article>

            {/* CENTER COLUMN */}
            <article className="article">
              <h2 className="article-title">Close Friends Speak Out</h2>
              <p className="article-text">
                <span className="drop-cap">M</span>
                era mazak udana has become his lifestyle choice atp. Matlab dedication dekho, consistency dekho… kisi aur cheez mein itni mehnat ki hoti toh aaj CEO hota(I am sure one day he will be and apne marzi ka maalik toh waise bhi hai)
              </p>
              <p className="article-text">
                But jitna bhi roast karle, end of day he will be by my side. Ab tak pata nhi kitni baar same same kahani suna suna ke paka chuki hu, but disown nhi kiya ab tak.Scene kuch bhi ho, end mein yeh mere saath hi khada hota hai. Bahut accha dost hai, one of the best infact. 22 saal ho gaye, and Aditya has upgraded. Maybe a more chaotic version, but still good. He is definitely got older, but wiser? maybe. Survived college because of him, very grateful for that.
              </p>
            </article>

            {/* SIDEBAR */}
            <div className="sidebar">
              <div className="sidebar-title">Fact File</div>
              <div className="stat">
                <span>Humour:</span>
                <strong>Annoying but effective</strong>
              </div>
              <div className="stat">
                <span>Decisions:</span>
                <strong>Theek thak</strong>
              </div>
              <div className="stat">
                <span>Energy:</span>
                <strong>Always high(iykyk)</strong>
              </div>
              <div className="stat">
                <span>Reliability:</span>
                <strong>Extremely reliable</strong>
              </div>
              <div className="stat">
                <span>Friendship:</span>
                <strong>Bhai hai, locked in</strong>
              </div>
            </div>
          </div>

{/* IMAGES */}
<div className="image-section">
  <div>
    <div className="news-image">
      <img src="/images/image.png" alt="Exhibit A" />
    </div>
    <div className="image-caption">
      Exhibit A: Still the same person (unfortunately)
    </div>
  </div>

  <div>
    <div className="news-image">
      <img src="/images/image3.jpeg" alt="Exhibit B" />
    </div>
    <div className="image-caption">
      Exhibit B: Proof of persistent chaos, age 22
    </div>
  </div>
</div>

          {/* CLASSIFIED BUTTON */}
          <button className="classified-btn" onClick={handleClassifiedClick}>
            Read Classified Truth
          </button>

          {/* EDITORIAL */}
          <div className="editorial">
            <h2 className="editorial-title">Editorial</h2>
            <p className="editorial-text">
              Jokes aside, behind all the chaos, you are one of the most important people in my life. Annoying, unpredictable, but absolutely irreplaceable. You have brought laughter, adventure, and unforgettable moments to everyone around you. Here&apos;s to 22 years of being gloriously, unapologetically you. Happy Birthday.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
