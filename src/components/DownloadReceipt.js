import React, { useRef } from "react";
import { Button } from "./button";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadReceipt = () => {
  const pdfRef = useRef();
  const { totalPrice } = useSelector((state) => state.cart);

  const downloadpdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfwidth = pdf.internal.pageSize.getWidth();
      const pdfheight = pdf.internal.pageSize.getHeight();
      const imgwidth = canvas.width;
      const imgheight = canvas.height;
      const ratio = Math.min(pdfwidth / imgwidth, pdfheight / imgheight);
      const imgx = (pdfwidth - imgwidth * ratio) / 2;
      const imgy = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgx,
        imgy,
        imgwidth * ratio,
        imgheight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div
      className="w-96 border-2 border-gray-700 p-6 rounded ml-12 mt-32 mb-6"
      ref={pdfRef}
    >
      <h1 className="p-2 font-bold">Cart Total</h1>

      <div className="flex text-md border-b p-3 grid grid-cols-2">
        Subtotal
        <span className="flex justify-end">{totalPrice}</span>
      </div>
      <div className="flex text-md border-b  p-3 grid grid-cols-2">
        Shiping
        <span className="flex justify-end">Free</span>
      </div>
      <div className="flex text-md  p-3 grid grid-cols-2">
        Total
        <span className="flex justify-end">{totalPrice}</span>
      </div>
      <div className="p-3 flex justify-center">
        <Button
          variant="danger"
          size="large"
          className=""
          onClick={downloadpdf}
        >
          Download Receipt
        </Button>
      </div>
    </div>
  );
};

export default DownloadReceipt;
