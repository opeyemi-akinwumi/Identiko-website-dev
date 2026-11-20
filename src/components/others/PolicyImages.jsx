import NDPR from "../../assets/policyImages/NDPR.png";
import ISO_IEC_27001_T from "../../assets/policyImages/ISO_IEC_27001_T.png";
import ISO_IEC_27701_T from "../../assets/policyImages/ISO_IEC_27701_T.png";
import { Link } from "react-router-dom";

const PolicyImages = () => {
  return (
    <div className="fixed flex items-end justify-end bottom-2 z-50 right-2 gap-2 transition-all duration-300">
      {/* <Link to={"/isms-policy"}> */}
      <a href="https://www.mosip.io/" target="_blank">
        <img
          src="/Mosip icon.png"
          alt="mosip"
          className="w-[70px] cursor-pointer"
        />
      </a>
      {/* </Link> */}
      <Link to={"/isms-policy"}>
        <img
          src={ISO_IEC_27701_T}
          alt="ISO_IEC_27701_T"
          className="w-[52px] cursor-pointer"
        />
      </Link>
      <Link to={"/isms-policy"}>
        <img
          src={ISO_IEC_27001_T}
          alt="ISO_IEC_27001_T"
          className="w-[52px] cursor-pointer"
        />
      </Link>
      <a
        href="https://services.ndpc.gov.ng/portal/?page=verify-c&d=ang3592545471880&id=94692&sn=4064f8e0fc63229562d2c4932282427e&t=audit_filing&tp=nwp_audit"
        target="_blank"
      >
        <img src={NDPR} alt="NDPR" className="w-[52px] cursor-pointer" />
      </a>
    </div>
  );
};

export default PolicyImages;
