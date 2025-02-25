
import { Table } from "./Table.jsx";

export const Body = ({ formBar, setFormBar }) => {
    return (
        <div className="flex-1 p-6">
            <Table formBar={formBar} setFormBar={setFormBar} /> {/* ✅ Pass it here */}
        </div>
    );
};

