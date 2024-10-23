import React, { useState, useEffect, useRef } from "react";
import {
  Share2,
  Star,
  Music,
  Trophy,
  Heart,
  Zap,
  Award,
  Target,
} from "lucide-react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const symbols = "♔♕♖♗♘♙♚♛♜♝♞♟";
    const hearts = "♥♡";

    const alphabet = katakana + latin + nums + symbols + hearts;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(canvas.height);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.8,
      }}
    />
  );
};
const matrixAnimation = `
  @keyframes matrixBg {
    0% { background-position: 0% 0%; }
    100% { background-position: 0% 100%; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes glowPulse {
    0% { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
    50% { text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0; }
    100% { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0; }
  }

  @keyframes cardHover {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-5px) scale(1.02); }
  }

  @keyframes achievementUnlock {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const styles = {
  container: {
    minHeight: "100vh",
    padding: "1rem",
    background: "black",
    fontFamily: "system-ui, sans-serif",
    color: "#00ff00",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    padding: "20px",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    border: "1px solid rgba(0, 255, 0, 0.2)",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    animation: "fadeIn 1s ease-out",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00ff00",
    marginBottom: "0.5rem",
    animation: "glowPulse 2s infinite",
  },
  subtitle: {
    color: "#00cc00",
    fontSize: "1.2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
  },
  card: {
    background: "rgba(0, 20, 0, 0.8)",
    borderRadius: "0.5rem",
    padding: "1rem",
    border: "1px solid #00ff00",
    cursor: "pointer",
    transition: "all 0.3s ease",
    animation: "fadeIn 0.5s ease-out",
    boxShadow: "0 0 10px rgba(0, 255, 0, 0.2)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#00ff00",
  },
  cardDescription: {
    fontSize: "0.875rem",
    color: "#00cc00",
  },
  activeCard: {
    background: "rgba(0, 40, 0, 0.9)",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    border: "2px solid #00ff00",
    marginBottom: "2rem",
    animation: "fadeIn 0.5s ease-out",
    boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
  },
  contentText: {
    fontSize: "1.25rem",
    textAlign: "center",
    padding: "2rem 0",
    color: "#00ff00",
  },
  button: {
    background: "#004400",
    color: "#00ff00",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    border: "1px solid #00ff00",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(0, 255, 0, 0.2)",
    fontWeight: "bold",
  },
  buttonContainer: {
    textAlign: "center",
  },
  statsContainer: {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    background: "rgba(0, 20, 0, 0.9)",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #00ff00",
    zIndex: 3,
    backdropFilter: "blur(5px)",
    minWidth: "200px",
  },
  achievement: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
    padding: "0.5rem",
    background: "rgba(0, 255, 0, 0.1)",
    borderRadius: "0.25rem",
    animation: "achievementUnlock 0.5s ease-out",
  },
  progressBar: {
    width: "100%",
    height: "4px",
    background: "#004400",
    borderRadius: "2px",
    marginTop: "0.5rem",
  },
  progressFill: {
    height: "100%",
    background: "#00ff00",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  },
  achievementPopup: {
    position: "fixed",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0, 40, 0, 0.95)",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "2px solid #00ff00",
    color: "#00ff00",
    zIndex: 1000,
    animation: "achievementUnlock 0.5s ease-out",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  purchaseModal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 20, 0, 0.95)",
    padding: "2rem",
    borderRadius: "0.5rem",
    border: "2px solid #00ff00",
    color: "#00ff00",
    zIndex: 1000,
    minWidth: "300px",
    boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)",
    backdropFilter: "blur(5px)",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  },
  modalTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "0 0 10px #00ff00",
  },
  modalButton: {
    background: "#004400",
    color: "#00ff00",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    border: "1px solid #00ff00",
    cursor: "pointer",
    fontSize: "1.1rem",
    width: "100%",
    marginTop: "1rem",
    transition: "all 0.3s ease",
  },
};
const CoupleEveningApp = () => {
  const [currentActivity, setCurrentActivity] = useState(null);
  const [currentContent, setCurrentContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState({
    questions: 0,
    challenges: 0,
    suggestions: 0,
  });
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStats, setGameStats] = useState({
    level: 1,
    exp: 0,
    points: 0,
    completedActivities: 0,
    achievements: [],
  });
  const [showAchievement, setShowAchievement] = useState(null);

  const achievements = [
    { id: 1, name: "Unplugged", icon: <Star size={16} />, requirement: 1 },
    { id: 2, name: "The One(s)", icon: <Heart size={16} />, requirement: 5 },
    {
      id: 3,
      name: "Zion's Finest",
      icon: <Trophy size={16} />,
      requirement: 10,
    },
    {
      id: 4,
      name: "Architects of Love",
      icon: <Award size={16} />,
      requirement: 20,
    },
  ];

  const activities = [
    {
      title: "Interrogation Program",
      description:
        "Accedi alla verità della vostra relazione attraverso il costruttore",
      questions: [
        "Se potessi scegliere una pillola per il nostro futuro, rossa o blu, quale sceglieresti e perché?",
        "Quale scena di Matrix descrive meglio il momento in cui ti sei innamorato/a?",
        "Se fossimo in Matrix, quale abilità vorresti che scaricassimo insieme?",
        "Come Neo ha Morpheus e Trinity, chi è la tua guida nella nostra relazione?",
        "Se il nostro amore fosse un glitch nella Matrix, che tipo di glitch sarebbe?",
        "Quale citazione di Matrix rappresenta meglio la nostra relazione?",
        "Se potessimo hackerare la Matrix per un giorno, cosa programmeresti per noi?",
        "Come Agent Smith rappresenta le tue paure nella relazione?",
        "Quale 'deja vu' della nostra storia vorresti rivivere all'infinito?",
        "Se Zion fosse il nostro futuro, come lo immagineresti?",
      ],
      icon: <Star style={{ color: "#00ff00" }} size={24} />,
    },
    {
      title: "Training Program",
      description:
        "Sfide per testare la sincronizzazione della vostra coppia nel sistema",
      challenges: [
        "Ricreare la scena del 'dodge this' con oggetti morbidi per 2 minuti",
        "Fare una foto in stile 'bullet time' usando effetti di slow motion",
        "Mimante i movimenti di kung fu di Neo e Trinity",
        "Cantate insieme 'Wake Up' dei Rage Against The Machine",
        "Inventate un codice segreto in stile Matrix da usare in pubblico",
        "Fate una dichiarazione d'amore usando solo citazioni di Matrix",
        "Create una coreografia ispirata alla scena del dojo",
        "Scrivete una poesia usando solo termini da hacker e Matrix",
        "Inventate un handshake ispirato agli agenti della Matrix",
        "Fate role-play: uno è Neo, l'altro l'Oracolo",
      ],
      icon: <Share2 style={{ color: "#00ff00" }} size={24} />,
    },
    {
      title: "Construct Program",
      description:
        "Programmate momenti speciali nel vostro spazio virtuale privato",
      suggestions: [
        "Create un cocktail verde fluorescente ispirato al codice Matrix",
        "Allestite la stanza con luci verdi e scritte digitali proiettate",
        "Guardate insieme una scena di Matrix e ricreate il dialogo",
        "Fate un massaggio simulando il 'download' di energia positiva",
        "Ricreate la scena della Woman in Red con un twist romantico",
        "Scrivete messaggi d'amore usando ASCII art",
        "Create una playlist con le musiche di Matrix e dei suoi sequel",
        "Programmate una 'missione' romantica segreta per il futuro",
        "Inventate un rituale di coppia ispirato ai programmi di addestramento",
        "Disegnate insieme la vostra versione della città delle macchine",
      ],
      icon: <Music style={{ color: "#00ff00" }} size={24} />,
    },
    {
      title: "Future Vision",
      description: "AI-powered: Scopri e pianifica il vostro futuro insieme",
      isPremium: true,
      price: "2.99",
      features: [
        "Obiettivi personalizzati",
        "Timeline interattiva",
        "Consigli AI",
        "Reminder automatici",
      ],
      icon: <Target style={{ color: "#00ff00" }} size={24} />,
    },
  ];

  const updateProgress = () => {
    setGameStats((prev) => {
      const newStats = {
        ...prev,
        points: prev.points + 10,
        exp: prev.exp + 20,
        completedActivities: prev.completedActivities + 1,
      };

      const newLevel = Math.floor(newStats.exp / 100) + 1;
      newStats.level = newLevel;

      const newAchievements = achievements.filter(
        (achievement) =>
          newStats.completedActivities >= achievement.requirement &&
          !prev.achievements.includes(achievement.id)
      );

      if (newAchievements.length > 0) {
        newStats.achievements = [
          ...prev.achievements,
          ...newAchievements.map((a) => a.id),
        ];
        setShowAchievement(newAchievements[0]);
        setTimeout(() => setShowAchievement(null), 3000);
      }

      return newStats;
    });
  };

  const getNextItem = (activity) => {
    let category, items;

    switch (activity.title) {
      case "Interrogation Program":
        category = "questions";
        items = activity.questions;
        break;
      case "Training Program":
        category = "challenges";
        items = activity.challenges;
        break;
      case "Construct Program":
        category = "suggestions";
        items = activity.suggestions;
        break;
      default:
        return "";
    }

    const nextIndex = (currentIndex[category] + 1) % items.length;

    setCurrentIndex((prev) => ({
      ...prev,
      [category]: nextIndex,
    }));

    setCurrentContent(items[nextIndex]);
    updateProgress();
  };

  const handleActivitySelect = (activity) => {
    if (activity.isPremium) {
      setShowPurchaseModal(true);
      return;
    }

    const categoryMap = {
      "Interrogation Program": activity.questions,
      "Training Program": activity.challenges,
      "Construct Program": activity.suggestions,
    };

    setCurrentActivity(activity);
    setCurrentContent(categoryMap[activity.title][0]);
    setIsPlaying(true);
  };
  return (
    <>
      <style>{matrixAnimation}</style>
      <div style={styles.container}>
        <MatrixRain />
        <div style={styles.content}>
          <div style={styles.innerContainer}>
            <header style={styles.header}>
              <h1 style={styles.title}>Matrix Romance</h1>
              <p style={styles.subtitle}>Entra nel sistema dell'amore</p>
            </header>

            <div style={styles.grid}>
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  style={styles.card}
                  onClick={() =>
                    activity.isPremium
                      ? setShowPurchaseModal(true)
                      : handleActivitySelect(activity)
                  }
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0, 255, 0, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow =
                      "0 0 10px rgba(0, 255, 0, 0.2)";
                  }}
                >
                  <div style={styles.cardHeader}>
                    {activity.icon}
                    <h2 style={styles.cardTitle}>{activity.title}</h2>
                    {activity.isPremium && (
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#00ff00",
                          border: "1px solid #00ff00",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          marginLeft: "auto",
                        }}
                      >
                        ${activity.price}
                      </span>
                    )}
                  </div>
                  <p style={styles.cardDescription}>{activity.description}</p>
                  {activity.isPremium && activity.features && (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "8px 0 0 0",
                        fontSize: "0.8rem",
                        color: "#00cc00",
                      }}
                    >
                      {activity.features.map((feature, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            marginTop: "4px",
                          }}
                        >
                          <Star size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {currentActivity && (
              <div style={styles.activeCard}>
                <div style={styles.cardHeader}>
                  {currentActivity.icon}
                  <h2 style={styles.cardTitle}>{currentActivity.title}</h2>
                </div>
                <p style={styles.contentText}>{currentContent}</p>
                <div style={styles.buttonContainer}>
                  <button
                    style={styles.button}
                    onClick={() => getNextItem(currentActivity)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#006600";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(0, 255, 0, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#004400";
                      e.currentTarget.style.boxShadow =
                        "0 0 10px rgba(0, 255, 0, 0.2)";
                    }}
                  >
                    Prossima Sfida
                  </button>
                </div>
              </div>
            )}
          </div>

          {isPlaying && (
            <div style={styles.statsContainer}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Trophy size={16} color="#00ff00" />
                <span>Livello {gameStats.level}</span>
              </div>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${gameStats.exp % 100}%`,
                  }}
                />
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Zap
                  size={16}
                  color="#00ff00"
                  style={{ marginRight: "0.5rem" }}
                />
                <span>{gameStats.points} punti</span>
              </div>
              {gameStats.achievements.map((achievementId) => {
                const achievement = achievements.find(
                  (a) => a.id === achievementId
                );
                return (
                  <div key={achievementId} style={styles.achievement}>
                    {achievement.icon}
                    <span>{achievement.name}</span>
                  </div>
                );
              })}
            </div>
          )}

          {showAchievement && (
            <div style={styles.achievementPopup}>
              {showAchievement.icon}
              <div>
                <h3>Achievement Sbloccato!</h3>
                <p>{showAchievement.name}</p>
              </div>
            </div>
          )}

          {showPurchaseModal && (
            <>
              <div
                style={styles.modalOverlay}
                onClick={() => setShowPurchaseModal(false)}
              />
              <div style={styles.purchaseModal}>
                <h3 style={styles.modalTitle}>Sblocca Future Vision</h3>
                <p>
                  Accedi alla potenza dell'AI per pianificare il vostro futuro
                  insieme
                </p>
                <p style={{ marginTop: "1rem" }}>
                  <strong>Prezzo: $2.99</strong>
                </p>
                <button
                  style={styles.modalButton}
                  onClick={() => {
                    alert("Funzionalità di pagamento in sviluppo");
                    setShowPurchaseModal(false);
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#006600";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0, 255, 0, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#004400";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Acquista Ora
                </button>
                <button
                  style={{
                    ...styles.modalButton,
                    background: "transparent",
                  }}
                  onClick={() => setShowPurchaseModal(false)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(0, 255, 0, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Annulla
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CoupleEveningApp;
