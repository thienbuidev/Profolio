import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlockDetail } from "../../hooks/useDatabase";
import { renderBlock } from "../../components/Products/BlockRenderer";

const ProductDetail = () => {
  const { id } = useParams();

  const {
    mutate: getDetail,
    data: dataResult,
    isPending,
    isError,
    error,
  } = useBlockDetail();

  useEffect(() => {
    if (id) {
      getDetail(id);
    }
  }, [id]);

  console.log(dataResult);

  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="max-w-[700px]">
        {isPending && <p>Loading block details...</p>}

        {isError && <p>Error: {error.message}</p>}

        {!dataResult || !Array.isArray(dataResult) ? (
          <p>No blocks found.</p>
        ) : (
          dataResult.map((block) => renderBlock(block))
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
