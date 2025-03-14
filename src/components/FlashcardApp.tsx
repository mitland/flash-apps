import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Shuffle,
  RotateCcw,
  Plus,
  Code,
  CheckCircle,
  XCircle,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { initialCards, Flashcard } from "../data/flashcards";

// Function to get cards from localStorage or use initial cards
const getInitialCards = (): Flashcard[] => {
  const savedCards = localStorage.getItem("flashcards");
  return savedCards ? JSON.parse(savedCards) : initialCards;
};

// Get unique categories from initial cards for presets
const getPresetCategories = (): string[] => {
  const categories = [...new Set(initialCards.map((card) => card.category))];
  return categories;
};

const FlashcardApp = () => {
  const [cards, setCards] = useState<Flashcard[]>(getInitialCards());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [newCard, setNewCard] = useState<Omit<Flashcard, "id" | "mastered">>({
    question: "",
    answer: "",
    category: "",
  });
  const [showAddCard, setShowAddCard] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>(cards);
  const [statistics, setStatistics] = useState({ total: 0, mastered: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [showPresetsDropdown, setShowPresetsDropdown] = useState(false);
  const presetsRef = useRef<HTMLDivElement>(null);
  const presetCategories = getPresetCategories();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        presetsRef.current &&
        !presetsRef.current.contains(event.target as Node)
      ) {
        setShowPresetsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Save cards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));

    // Update last saved time
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setLastSaved(formattedTime);

    // Show notification
    if (cards.length > 0) {
      setNotification({
        message: "Cards saved to localStorage",
        type: "success",
      });

      // Clear notification after 2 seconds
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [cards]);

  // Extract unique categories
  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(cards.map((card) => card.category)),
    ];
    setCategories(uniqueCategories);

    // Update statistics
    setStatistics({
      total: cards.length,
      mastered: cards.filter((card) => card.mastered).length,
    });
  }, [cards]);

  // Filter cards based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((card) => card.category === selectedCategory)
      );
    }
    setCurrentIndex(0);
    setFlipped(false);
  }, [selectedCategory, cards]);

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setFilteredCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setFlipped(false);
  };

  const handleResetAllCards = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all cards to their initial state? This will remove any cards you've added and reset mastery status."
      )
    ) {
      setCards(initialCards);
      setCurrentIndex(0);
      setFlipped(false);
      setSelectedCategory("All");
      setNotification({
        message: "Cards reset to initial state",
        type: "success",
      });
    }
  };

  const handleAddCard = () => {
    if (newCard.question && newCard.answer) {
      const newId =
        cards.length > 0 ? Math.max(...cards.map((card) => card.id)) + 1 : 1;
      const cardToAdd = {
        ...newCard,
        id: newId,
        mastered: false,
        category: newCard.category || "Uncategorized",
      };

      setCards([...cards, cardToAdd]);
      setNewCard({ question: "", answer: "", category: "" });
      setShowAddCard(false);
      setNotification({
        message: "New card added successfully",
        type: "success",
      });
    }
  };

  const toggleMastered = () => {
    const currentCard = filteredCards[currentIndex];
    const newMasteredStatus = !currentCard.mastered;

    const updatedCards = cards.map((card) =>
      card.id === currentCard.id
        ? { ...card, mastered: newMasteredStatus }
        : card
    );

    setCards(updatedCards);
    setNotification({
      message: newMasteredStatus
        ? `Card marked as mastered`
        : `Card marked as not mastered`,
      type: "success",
    });
  };

  const handleExportCards = () => {
    const dataStr = JSON.stringify(cards, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `flashcards-export-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();

    setNotification({
      message: "Cards exported successfully",
      type: "success",
    });
  };

  const handleImportCards = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedCards = JSON.parse(
          e.target?.result as string
        ) as Flashcard[];

        if (
          window.confirm(
            `Import ${importedCards.length} cards? This will replace your current cards.`
          )
        ) {
          setCards(importedCards);
          setSelectedCategory("All");
          setNotification({
            message: `${importedCards.length} cards imported successfully`,
            type: "success",
          });
        }
      } catch (error) {
        setNotification({
          message: "Error importing cards. Check file format.",
          type: "error",
        });
        console.error("Import error:", error);
      }
    };
    reader.readAsText(file);

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Add a new function to delete a single card
  const handleDeleteCard = () => {
    if (filteredCards.length === 0) return;

    const currentCard = filteredCards[currentIndex];

    if (
      window.confirm(
        `Are you sure you want to delete this card: "${currentCard.question}"?`
      )
    ) {
      const updatedCards = cards.filter((card) => card.id !== currentCard.id);
      setCards(updatedCards);

      // If we're deleting the last card in the filtered list, move to the previous card
      if (currentIndex === filteredCards.length - 1 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      setNotification({
        message: "Card deleted successfully",
        type: "success",
      });
    }
  };

  // Add a function to delete all cards
  const handleDeleteAllCards = () => {
    if (
      window.confirm(
        "Are you sure you want to delete ALL cards? This action cannot be undone."
      )
    ) {
      setCards([]);
      setCurrentIndex(0);
      setFlipped(false);
      setSelectedCategory("All");
      setNotification({
        message: "All cards have been deleted",
        type: "success",
      });
    }
  };

  // Add a function to add preset cards by category
  const handleAddPresetCards = (category: string) => {
    // Find all cards from initialCards that match the selected category
    const presetCards = initialCards.filter(
      (card) => card.category === category
    );

    if (presetCards.length === 0) {
      setNotification({
        message: `No preset cards found for category: ${category}`,
        type: "error",
      });
      return;
    }

    // Check if any of these cards already exist in the current cards (by question)
    const existingQuestions = new Set(cards.map((card) => card.question));
    const newCards = presetCards.filter(
      (card) => !existingQuestions.has(card.question)
    );

    if (newCards.length === 0) {
      setNotification({
        message: `All ${category} cards are already in your collection`,
        type: "info",
      });
      return;
    }

    // Add the new cards to the current cards
    setCards([...cards, ...newCards]);
    setSelectedCategory(category);
    setShowPresetsDropdown(false);

    setNotification({
      message: `Added ${newCards.length} ${category} cards to your collection`,
      type: "success",
    });
  };

  return (
    <div className="sm:container flex flex-col min-h-screen text-white p-6">
      {/* Hidden file input for import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportCards}
        accept=".json"
        className="hidden"
      />

      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 flex items-center gap-2 ${
            notification.type === "success"
              ? "bg-green-500/80 text-white"
              : notification.type === "error"
              ? "bg-red-500/80 text-white"
              : "bg-blue-500/80 text-white"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle size={16} />
          ) : notification.type === "error" ? (
            <XCircle size={16} />
          ) : (
            <AlertTriangle size={16} />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Header with statistics */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Neural Flashcards
        </h1>
        <div className="flex flex-wrap items-center space-x-6">
          <p className="text-blue-300">
            Total Cards:{" "}
            <span className="text-white font-bold">{statistics.total}</span>
          </p>
          <p className="text-green-300">
            Mastered:{" "}
            <span className="text-white font-bold">{statistics.mastered}</span>
          </p>
          <p className="text-purple-300">
            To Learn:{" "}
            <span className="text-white font-bold">
              {statistics.total - statistics.mastered}
            </span>
          </p>
          {lastSaved && (
            <p className="text-gray-400 text-sm">Last saved: {lastSaved}</p>
          )}
          <div className="ml-auto flex gap-2">
            <div className="relative" ref={presetsRef}>
              <button
                onClick={() => setShowPresetsDropdown(!showPresetsDropdown)}
                className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors flex items-center gap-1"
              >
                <BookOpen size={14} />
                Add Presets
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    showPresetsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showPresetsDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10 py-1 border border-gray-700">
                  {presetCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleAddPresetCards(category)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors"
                    >
                      {category} Cards
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors flex items-center gap-1"
            >
              <Upload size={14} />
              Import
            </button>
            <button
              onClick={handleExportCards}
              className="text-sm px-3 py-1 bg-green-500/20 text-green-300 rounded-full hover:bg-green-500/30 transition-colors flex items-center gap-1"
            >
              <Download size={14} />
              Export
            </button>
            <button
              onClick={handleResetAllCards}
              className="text-sm px-3 py-1 bg-red-500/20 text-red-300 rounded-full hover:bg-red-500/30 transition-colors flex items-center gap-1"
            >
              <RotateCcw size={14} />
              Reset
            </button>
            <button
              onClick={handleDeleteAllCards}
              className="text-sm px-3 py-1 bg-red-600/20 text-red-300 rounded-full hover:bg-red-600/30 transition-colors flex items-center gap-1"
            >
              <AlertTriangle size={14} />
              Delete All
            </button>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategory === category
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Flashcard display */}
      {filteredCards.length > 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center mb-8">
          <div
            className={`relative w-full max-w-2xl h-64 rounded-2xl shadow-2xl transition-all duration-700 transform ${
              flipped ? "rotate-y-180" : ""
            }`}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            onClick={() => setFlipped(!flipped)}
          >
            {/* Front of card (Question) */}
            <div
              className={`absolute inset-0 p-8 rounded-2xl flex flex-col justify-between bg-gradient-to-br from-blue-800 to-indigo-900 border border-blue-400/30 backdrop-blur-sm transition-all ${
                flipped ? "opacity-0 rotate-y-180" : "opacity-100"
              }`}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs bg-blue-600/50 px-3 py-1 rounded-full">
                  {filteredCards[currentIndex]?.category}
                </span>
                <span className="text-xs bg-gray-800/80 px-3 py-1 rounded-full">
                  {currentIndex + 1} / {filteredCards.length}
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-xl md:text-2xl font-semibold text-center">
                  {filteredCards[currentIndex]?.question}
                </h2>
              </div>

              <div className="flex justify-center">
                <p className="text-blue-300 text-sm">Tap to reveal answer</p>
              </div>
            </div>

            {/* Back of card (Answer) */}
            <div
              className={`absolute inset-0 p-8 rounded-2xl flex flex-col justify-between bg-gradient-to-br from-purple-800 to-indigo-900 border border-purple-400/30 backdrop-blur-sm transition-all ${
                flipped ? "opacity-100" : "opacity-0 rotate-y-180"
              }`}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs bg-purple-600/50 px-3 py-1 rounded-full">
                  Answer
                </span>
                <span className="text-xs bg-gray-800/80 px-3 py-1 rounded-full">
                  {currentIndex + 1} / {filteredCards.length}
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <p className="text-lg text-center">
                  {filteredCards[currentIndex]?.answer}
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMastered();
                  }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    filteredCards[currentIndex]?.mastered
                      ? "bg-green-500/20 text-green-300"
                      : "bg-gray-700/50 text-gray-300"
                  }`}
                >
                  {filteredCards[currentIndex]?.mastered ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Mastered</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={16} />
                      <span>Not Mastered</span>
                    </>
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCard();
                  }}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-300 hover:bg-red-500/30"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={handleShuffle}
              className="p-3 rounded-full bg-indigo-700 hover:bg-indigo-600 transition-all"
            >
              <Shuffle size={20} />
            </button>

            <button
              onClick={handleReset}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <RotateCcw size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === filteredCards.length - 1}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400">
            No cards in this category. Add some cards or select a different
            category.
          </p>
        </div>
      )}

      {/* Add new card section */}
      <div className="mt-auto">
        {showAddCard ? (
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-blue-500/20 animate-slideUp">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code size={20} />
              <span>Add New Flashcard</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={newCard.category}
                  onChange={(e) =>
                    setNewCard({ ...newCard, category: e.target.value })
                  }
                  placeholder="e.g. JavaScript, React, Algorithms..."
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Question
                </label>
                <textarea
                  value={newCard.question}
                  onChange={(e) =>
                    setNewCard({ ...newCard, question: e.target.value })
                  }
                  placeholder="Enter your question here..."
                  rows={2}
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Answer
                </label>
                <textarea
                  value={newCard.answer}
                  onChange={(e) =>
                    setNewCard({ ...newCard, answer: e.target.value })
                  }
                  placeholder="Enter the answer here..."
                  rows={3}
                  className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddCard}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium hover:from-blue-500 hover:to-indigo-500 transition-all"
                >
                  Save Card
                </button>
                <button
                  onClick={() => setShowAddCard(false)}
                  className="flex-1 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddCard(true)}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20"
          >
            <Plus size={20} />
            <span>Add New Flashcard</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FlashcardApp;
