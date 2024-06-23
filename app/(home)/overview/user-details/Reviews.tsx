import { UserViewDetailPane } from "@/components/UserDetail";
import { Button, Rate } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";

const Reviews: React.FC = () => {
    return (
        <UserViewDetailPane header={"Reviews"} cta={() => {}}>
            <ul className="flex flex-col pt-5 gap-y-7 border-[#E4E7EC] border-t">
                <li className="flex flex-col gap-y-4">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-x-4 items-center">
                            <Rate allowClear={false} defaultValue={4} />
                            <p>February 3, 2024</p>
                        </div>
                        <RiDeleteBin6Line className="text-error-500 h-7 w-7 font-semibold" />
                    </div>
                    <p className="text-s">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum molestiae deserunt ipsum? Praesentium quae
                        commodi velit ratione fuga repudiandae illo eligendi
                        itaque ad! Sit aut perferendis dignissimos ipsa,
                        obcaecati possimus!
                    </p>
                </li>
                <li className="flex flex-col gap-y-4">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-x-4 items-center">
                            <Rate allowClear={false} defaultValue={2} />
                            <p>February 3, 2024</p>
                        </div>
                        <RiDeleteBin6Line className="text-error-500 h-7 w-7 font-semibold" />
                    </div>
                    <p className="text-s">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur optio, nesciunt ipsam exercitationem harum
                        quo magnam deserunt explicabo placeat ea quod dolores
                        ipsa deleniti autem accusantium nisi rem maiores quae!
                        Natus!
                    </p>
                </li>
            </ul>
        </UserViewDetailPane>
    );
};

export default Reviews;
