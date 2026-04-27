export interface RobloxData {
    id: number;
    name: string;
    description: string;
    creator: string;
}

export async function fetchRobloxData(placeId: number): Promise<RobloxData> {
    const response = await fetch(`https://api.roblox.com/places/${placeId}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    return {
        id: data.PlaceId,
        name: data.Name,
        description: data.Description,
        creator: data.Creator.Name,
    };
}

export function formatRobloxData(data: RobloxData): string {
    return `Game ID: ${data.id}\nName: ${data.name}\nDescription: ${data.description}\nCreated by: ${data.creator}`;
}

export function isRobloxData(obj: any): obj is RobloxData {
    return typeof obj.id === 'number' &&
           typeof obj.name === 'string' &&
           typeof obj.description === 'string' &&
           typeof obj.creator === 'string';
}