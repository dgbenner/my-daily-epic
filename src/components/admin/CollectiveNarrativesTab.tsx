import { Card, Badge } from "@/components/ui";
import { collectiveNarratives } from "@/lib/data";

export const CollectiveNarrativesTab = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-900 text-lg">Active Collective Narratives</h3>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-gray-900">
          + Create New Narrative
        </button>
      </div>
      <div className="space-y-4">
        {collectiveNarratives.map((n) => (
          <Card key={n.id}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-gray-900">{n.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{n.description}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>👥 {n.participants.toLocaleString()} participants</span>
                  <span>📅 Ends {n.endDate}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50">
                    Edit Parameters
                  </button>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50">
                    View Stories
                  </button>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs hover:bg-gray-50">
                    📊
                  </button>
                </div>
              </div>
              <Badge variant={n.status === "active" ? "active" : "planning"}>{n.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
