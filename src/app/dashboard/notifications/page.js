import Image from "next/image";
import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export const metadata = {
  title: "Notification | OTAB",
};

const NotificationsPage = () => {
  return (
    <div className="bg-[#171f2a] w-full  p-6 py-2">
      <p className="flex items-center gap-2 mt-2 text-2xl">
        <MdOutlineNotificationsActive></MdOutlineNotificationsActive>{" "}
        Notifications
      </p>
      <p>All Notification In Activities</p>

      <div>
        <article className="flex justify-between mt-5 items-center">
          <div className="flex gap-5 items-center">
            <div>
              <Image
                width={45}
                height={45}
                src="https://cryptdash.vercel.app/assets/img/chat_1.png"
                alt=""
              ></Image>
            </div>
            <div>
              <p>Brian Cumin commented on your post</p>
              <p>
                Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
                eros. Fusce rutrum
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <p>2 Days ago</p>
            <p>
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </p>
          </div>
        </article>
        <article className="flex justify-between mt-5 items-center">
          <div className="flex gap-5 items-center">
            <div>
              <Image
                width={45}
                height={45}
                src="https://cryptdash.vercel.app/assets/img/chat_4.png"
                alt=""
              ></Image>
            </div>
            <div>
              <p>Brian Cumin commented on your post</p>
              <p>
                Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
                eros. Fusce rutrum
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <p>2 Days ago</p>
            <p>
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </p>
          </div>
        </article>
        <article className="flex justify-between mt-5 items-center">
          <div className="flex gap-5 items-center">
            <div>
              <Image
                width={45}
                height={45}
                src="https://cryptdash.vercel.app/assets/img/chat_3.png"
                alt=""
              ></Image>
            </div>
            <div>
              <p>Brian Cumin commented on your post</p>
              <p>
                Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
                eros. Fusce rutrum
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <p>2 Days ago</p>
            <p>
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NotificationsPage;
