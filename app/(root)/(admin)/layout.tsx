import LeftSideBar from "./_components/LeftSideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-t border-gray-300 ">
			<LeftSideBar />
			<section className="flex-1 size-full">{children}</section>
		</div>
	);
};

export default AdminLayout;
