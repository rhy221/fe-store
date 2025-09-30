"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import { Button } from "../../../components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  status: "available" | "direct-sale" | "auction";
}

// Function to get saleType display text based on status
const getSaleTypeDisplay = (status: Product["status"]): string => {
  switch (status) {
    case "direct-sale":
      return "Bán trực tiếp";
    case "auction":
      return "Bán đấu giá";
    case "available":
    default:
      return "Chọn hình thức";
  }
};

export default function ProductListScreen() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Giày thể thao",
      image: "/images/shoe.png",
      status: "available",
    },
    {
      id: 2,
      name: "Giày thể thao 2",
      image: "/images/shoe2.png",
      status: "available",
    },
    {
      id: 3,
      name: "Áo thun Premium",
      image: "/images/tshirt.png",
      status: "direct-sale",
    },
    {
      id: 4,
      name: "Quần jean cao cấp",
      image: "/images/jeans.png",
      status: "auction",
    },
    {
      id: 5,
      name: "Túi xách da thật",
      image: "/images/bag.png",
      status: "direct-sale",
    },
    {
      id: 6,
      name: "Đồng hồ thông minh",
      image: "/images/watch.png",
      status: "auction",
    },
    {
      id: 7,
      name: "Áo khoác hoodie",
      image: "/images/hoodie.png",
      status: "available",
    },
    {
      id: 8,
      name: "Giày boots da",
      image: "/images/boots.png",
      status: "direct-sale",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [showSalesTypeModal, setShowSalesTypeModal] = useState(false);
  const [selectedProductForSales, setSelectedProductForSales] = useState<
    number | null
  >(null);
  const [selectedSalesType, setSelectedSalesType] = useState<
    "direct" | "auction" | null
  >(null);
  const [showDirectSaleModal, setShowDirectSaleModal] = useState(false);
  const [salePrice, setSalePrice] = useState("");
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [startingPrice, setStartingPrice] = useState("");
  const [bidIncrement, setBidIncrement] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        (showActionModal ||
          showSalesTypeModal ||
          showDirectSaleModal ||
          showAuctionModal)
      ) {
        closeModal();
        closeSalesTypeModal(true);
        closeDirectSaleModal();
        closeAuctionModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [
    showActionModal,
    showSalesTypeModal,
    showDirectSaleModal,
    showAuctionModal,
  ]);

  const handleAddProduct = () => {
    window.location.href = "/designer/product-upload";
  };

  const handleViewDetails = (productId: number) => {
    setSelectedProduct(productId);
    setShowActionModal(true);
  };

  const closeModal = () => {
    setShowActionModal(false);
    setSelectedProduct(null);
  };

  const closeSalesTypeModal = (clearSelection: boolean = true) => {
    setShowSalesTypeModal(false);
    if (clearSelection) {
      setSelectedProductForSales(null);
    }
    setSelectedSalesType(null);
  };

  const closeDirectSaleModal = () => {
    setShowDirectSaleModal(false);
    setSalePrice("");
  };

  const closeAuctionModal = () => {
    setShowAuctionModal(false);
    setStartingPrice("");
    setBidIncrement("");
    setStartTime("");
    setEndTime("");
  };

  const handleSalesTypeClick = (productId: number) => {
    setSelectedProductForSales(productId);
    setSelectedSalesType(null);
    setShowSalesTypeModal(true);
  };

  const handleSalesTypeSelect = (salesType: "direct" | "auction") => {
    setSelectedSalesType(salesType);
  };

  const handleAction = (action: "view" | "edit" | "delete") => {
    console.log(`${action} product:`, selectedProduct);
    closeModal();
    // Add your action logic here
    if (action === "view") {
      // Navigate to view product
    } else if (action === "edit") {
      // Navigate to edit product
    } else if (action === "delete") {
      // Delete product logic
    }
  };

  return (
    <div>
      {/* Click outside overlay - invisible but captures clicks */}
      {showActionModal && (
        <div className="fixed inset-0 z-40" onClick={closeModal}></div>
      )}

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header />
      </div>

      {/* Main content with blur effect when modals are open */}
      <div
        className={`${
          showSalesTypeModal || showDirectSaleModal || showAuctionModal
            ? "blur-sm"
            : ""
        } transition-all duration-300 pt-24`}
      >
        <main className="container mx-auto px-8 py-8">
          {/* Title and Add Button */}
          <div className="flex justify-between items-center mb-8 mt-4">
            <h1 className="text-3xl font-black text-gray-800 flex-shrink-0">
              Danh sách mẫu
            </h1>
            <Button
              onClick={handleAddProduct}
              className="px-6 py-3 text-white rounded-full font-medium shadow-md transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: "#000080" }}
            >
              Thêm mẫu
            </Button>
          </div>

          {/* Product Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden relative mb-8">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
              <div className="p-4 font-semibold text-gray-700 text-center">
                Mẫu
              </div>
              <div className="p-4 font-semibold text-gray-700 text-center border-l border-gray-200">
                Hình thức bán
              </div>
              <div className="p-4 font-semibold text-gray-700 text-center border-l border-gray-200">
                Thao tác
              </div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="overflow-y-auto max-h-96">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* Product Column */}
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      {/* Shoe Icon - You can replace with actual product image */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-600"
                      >
                        <path
                          d="M2 18h20l-2-6H4l-2 6zM6 12V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">
                      {product.name}
                    </span>
                  </div>

                  {/* Sales Type Column */}
                  <div className="p-4 flex items-center justify-center border-l border-gray-200">
                    <span
                      {...(product.status === "available" && {
                        onClick: () => handleSalesTypeClick(product.id),
                      })}
                      className={`text-sm font-medium ${
                        product.status === "available"
                          ? "cursor-pointer"
                          : "cursor-default"
                      } ${
                        product.status === "direct-sale" ||
                        product.status === "auction"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {getSaleTypeDisplay(product.status)}
                    </span>
                  </div>

                  {/* Actions Column */}
                  <div className="p-4 flex items-center justify-center border-l border-gray-200 relative">
                    <button
                      onClick={() => handleViewDetails(product.id)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors cursor-pointer"
                    >
                      Chi tiết
                    </button>

                    {/* Dropdown Modal */}
                    {showActionModal && selectedProduct === product.id && (
                      <div
                        className="absolute top-0 left-1/2 translate-x-8 bg-white rounded-lg shadow-xl border border-gray-300 w-20 text-xs"
                        style={{ zIndex: 1000 }}
                      >
                        <div className="divide-y divide-gray-200">
                          <button
                            onClick={() => handleAction("view")}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 text-sm"
                          >
                            <span className="text-gray-800 font-medium">
                              Xem
                            </span>
                          </button>
                          <button
                            onClick={() => handleAction("edit")}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 text-sm"
                          >
                            <span className="text-gray-800 font-medium">
                              Sửa
                            </span>
                          </button>
                          <button
                            onClick={() => handleAction("delete")}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 text-sm"
                          >
                            <span className="text-gray-800 font-medium">
                              Xoá
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State (if no products) */}
            {products.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mx-auto text-gray-300"
                  >
                    <path
                      d="M20 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium mb-2">
                  Chưa có mẫu thiết kế nào
                </p>
                <p className="text-sm mb-4">
                  Thêm mẫu thiết kế đầu tiên của bạn
                </p>
                <Button
                  onClick={handleAddProduct}
                  className="px-6 py-2 text-white rounded-full font-medium"
                  style={{ backgroundColor: "#000080" }}
                >
                  Thêm mẫu
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Sales Type Selection Modal */}
      {showSalesTypeModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => closeSalesTypeModal(true)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Chọn hình thức bán
            </h2>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSalesTypeSelect("direct")}
                className={`w-full p-4 rounded-2xl border-2 text-left font-medium transition-all ${
                  selectedSalesType === "direct"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                Bán trực tiếp
              </button>

              <button
                onClick={() => handleSalesTypeSelect("auction")}
                className={`w-full p-4 rounded-2xl border-2 text-left font-medium transition-all ${
                  selectedSalesType === "auction"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                Bán đấu giá
              </button>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => closeSalesTypeModal(true)}
                className="flex-1 py-3 px-6 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors"
              >
                Hủy
              </Button>
              <Button
                onClick={() => {
                  if (selectedSalesType) {
                    if (selectedSalesType === "direct") {
                      // Open direct sale modal for price input
                      closeSalesTypeModal(false);
                      setShowDirectSaleModal(true);
                    } else if (selectedSalesType === "auction") {
                      // Open auction modal for auction setup
                      closeSalesTypeModal(false);
                      setShowAuctionModal(true);
                    }
                  }
                }}
                className="flex-1 py-3 px-6 text-white rounded-full font-medium transition-colors"
                style={{ backgroundColor: "#000080" }}
                disabled={!selectedSalesType}
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Sale Modal */}
      {showDirectSaleModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-60"
          onClick={closeDirectSaleModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Bán trực tiếp
            </h2>

            {/* Product Display */}
            {(() => {
              const selectedProduct = products.find(
                (p) => p.id === selectedProductForSales
              );

              if (!selectedProduct) {
                return (
                  <div className="flex flex-col items-center mb-8">
                    <div className="w-48 h-48 bg-gray-200 rounded-3xl border-8 border-black mb-6 flex items-center justify-center">
                      <span className="text-gray-500">No Product</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Unknown Product
                    </h3>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center mb-8">
                  {/* Product Image Container */}
                  <div className="w-48 h-48 bg-white rounded-3xl border-8 border-black mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-40 h-40 object-contain"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/200x200/f0f0f0/999999?text=" +
                          encodeURIComponent(selectedProduct.name);
                      }}
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.name}
                  </h3>
                </div>
              );
            })()}

            {/* Price Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nhập giá bán
              </label>
              <input
                type="text"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                placeholder="VND"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={closeDirectSaleModal}
                className="flex-1 py-3 px-6 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  if (salePrice.trim()) {
                    console.log(
                      `Direct sale price set: ${salePrice} VND for product:`,
                      selectedProductForSales
                    );
                    // Here you would update the product with the price and status
                    closeDirectSaleModal();
                  }
                }}
                className="flex-1 py-3 px-6 text-white rounded-full font-medium transition-colors cursor-pointer"
                style={{ backgroundColor: "#000080" }}
                disabled={!salePrice.trim()}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auction Modal */}
      {showAuctionModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-60"
          onClick={closeAuctionModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[500px] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Bán đấu giá
            </h2>

            {/* Product Section - Centered */}
            {(() => {
              const selectedProduct = products.find(
                (p) => p.id === selectedProductForSales
              );

              if (!selectedProduct) {
                return (
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-2xl border-4 border-black mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">No Product</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center">
                      Unknown Product
                    </h3>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center mb-6">
                  {/* Product Image Container */}
                  <div className="w-32 h-32 bg-white rounded-2xl border-4 border-black flex items-center justify-center overflow-hidden shadow-md mb-3">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-24 h-24 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/120x120/f0f0f0/999999?text=No+Image";
                      }}
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {selectedProduct.name}
                  </h3>
                </div>
              );
            })()}

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Pricing Fields - Side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giá khởi điểm
                  </label>
                  <input
                    type="text"
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                    placeholder="VND"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bước giá
                  </label>
                  <input
                    type="text"
                    value={bidIncrement}
                    onChange={(e) => setBidIncrement(e.target.value)}
                    placeholder="VND"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Time Fields - Side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thời gian bắt đầu
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thời gian kết thúc
                  </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mt-6">
              <button
                onClick={closeAuctionModal}
                className="flex-1 py-2.5 px-4 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors cursor-pointer text-sm"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  if (
                    startingPrice.trim() &&
                    bidIncrement.trim() &&
                    startTime &&
                    endTime
                  ) {
                    console.log(
                      `Auction setup - Starting Price: ${startingPrice} VND, Bid Increment: ${bidIncrement} VND, Start: ${startTime}, End: ${endTime} for product:`,
                      selectedProductForSales
                    );
                    // Here you would update the product with auction details
                    closeAuctionModal();
                  }
                }}
                className="flex-1 py-2.5 px-4 text-white rounded-lg font-medium transition-colors cursor-pointer text-sm"
                style={{ backgroundColor: "#000080" }}
                disabled={
                  !startingPrice.trim() ||
                  !bidIncrement.trim() ||
                  !startTime ||
                  !endTime
                }
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
