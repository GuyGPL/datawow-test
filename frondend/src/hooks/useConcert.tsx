import {
    fetchConcertList,
    fetchConcertSummary,
} from "@/services/concerts.service";
import { useQuery } from "@tanstack/react-query";

type UseConcertReturnType = {};

export default function useConcert(): UseConcertReturnType {
    const { data: concertSummary } = useQuery({
        queryKey: ["concerts", "summary"],
        queryFn: async () => await fetchConcertSummary(),
    });

    const { data: concertList } = useQuery({
        queryKey: ["concerts"],
        queryFn: async () => await fetchConcertList(),
    });

    return { concertSummary, concertList };
}
